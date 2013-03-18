Sinatra Rocket I/O Sample Chat
==============================

* https://github.com/shokai/sinatra-rocketio


Install Dependencies
--------------------
Ruby 1.8.7 or 1.9.2 or 1.9.3 or 2.0.0 required.

    % gem install bundler foreman
    % bundle install


Run
---

    % export PORT=5000
    % export WS_PORT=8080
    % foreman start

=> http://localhost:5000


Deploy
------

    % heroku create --stack cedar
    % git push heroku master
    % heroku open
