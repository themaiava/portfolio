import os, http.server, socketserver

root = os.path.join(os.path.dirname(__file__), "..")
os.chdir(os.path.abspath(root))
PORT = 3000
Handler = http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()
