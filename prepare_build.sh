#!/bin/bash

echo "Preparing build. You are going to need npm at a minimum"

#fetch dependencies via npm
echo "Fetching dependencies needed for build..."
npm install


#wipe build directory
echo "Erasing build/deploy directories..."
rm -rf build

#delete plugin directories
rm -rf plugin/dist plugin/omero_iviewer.egg-info
rm -rf plugin/omero_iviewer/static plugin/omero_iviewer/templates

#recreate static and templates directories
echo "Recreating build/deploy directories..."
mkdir -p plugin/omero_iviewer/static/omero_iviewer/css/images
mkdir -p plugin/omero_iviewer/templates/omero_iviewer
