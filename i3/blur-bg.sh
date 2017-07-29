#!/usr/bin/env sh

cd ~/Pictures/
gimp -i -b '(plug-in-gauss 0 "madeon-test.png" "madeon-test.png" 200.0 200.0 0)' -b '(gimp-quit 0)'
