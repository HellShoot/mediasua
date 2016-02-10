import sys
sys.stdout = sys.stderr

import atexit
import threading
import cherrypy
import os
import json

import requests
from lxml import html
from urlparse import urlparse
from bs4 import BeautifulSoup

cherrypy.config.update({'environment': 'embedded'})

if cherrypy.__version__.startswith('3.0') and cherrypy.engine.state == 0:
    cherrypy.engine.start(blocking=False)
    atexit.register(cherrypy.engine.stop)


# Path to static directory
repo = os.environ['OPENSHIFT_REPO_DIR']
STATIC_DIR = os.path.join(repo, u"wsgi", u"static")


class Root(object):

    _cp_config = {'tools.staticdir.on': True,
                  'tools.staticdir.dir': STATIC_DIR,
                  'tools.staticdir.index': 'index.html'
    }

    def index(self):
        return open(os.path.join(STATIC_DIR, u'index.html'))
    index.exposed = True

    @cherrypy.expose
    @cherrypy.tools.allow(methods=['POST'])
    def calcular(self, username, password):
        return get_notas(username, password)


def get_notas(username, password):
    s = requests.Session()
    r = s.get(url="https://paco.ua.pt/secvirtual/c_historiconotas.asp")

    tree = html.fromstring(r.content)
    o = urlparse(r.url)

    url_auth = o.scheme + "://" + o.netloc + tree.body.forms[0].attrib["action"]
    r = s.post(url_auth, data={'j_password': password, 'j_username': username, 'Submeter': 'OK'})

    tree = html.fromstring(r.content)

    inputs = tree.xpath("//input")

    payload = {'RelayState': inputs[0].value, 'SAMLResponse': inputs[1].value}

    o = urlparse(r.url)
    url_auth = o.scheme + "://" + o.netloc + tree.body.forms[0].attrib["action"]

    r = s.post(url_auth, data=payload)
    return "ok" + url_auth
    r = s.get("https://paco.ua.pt/secvirtual/c_planocurr.asp")

    soup = BeautifulSoup(r.content)
    table = soup.find('table', attrs={'width': '95%', 'align': 'center', 'cellspadding': '2'})

    cadeiras = []

    for row in table.findAll("tr"):
        cells = row.findAll("td")
        if len(cells) == 8 and cells[1].text.rstrip().replace("\r\n\t", "") != 'Codigo':
            if len(cells[7].text.rstrip().replace("\r\n\t", "")) != 0:
                cadeiras += [{'codigo': int(cells[1].text.rstrip().replace("\r\n\t", "")),
                             'nome': cells[2].text.rstrip().replace("\r\n\t", ""),
                             'ano': int(cells[3].text.rstrip().replace("\r\n\t", "")),
                             'semestre': int(cells[4].text.rstrip().replace("\r\n\t", "")),
                             'ects':float(cells[6].text.rstrip().replace("\r\n\t", "").replace(",", ".")),
                             'nota': float(cells[7].text.rstrip().replace("\r\n\t", "").replace(",", "."))}]
    nota = 0.0
    creditos = 0.0

    for cadeira in cadeiras:
        nota += (cadeira["nota"] * cadeira["ects"])
        creditos += cadeira["ects"]

    nota = nota / creditos

    return json.dumps({'cadeiras': cadeiras, 'media': nota})

application = cherrypy.Application(Root(), script_name=None, config=None)

