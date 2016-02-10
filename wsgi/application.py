import sys
sys.stdout = sys.stderr

import atexit
import threading
import cherrypy
import os

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
        return username + password

application = cherrypy.Application(Root(), script_name=None, config=None)

