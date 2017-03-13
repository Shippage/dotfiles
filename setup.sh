#!/bin/sh

# Install Vundle
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim

# Copy the vimrc
rsync -v * ~/.vim --exclude=.vimrc
rsync -v .vimrc ~/.vimrc

echo "Set-up complete!"
