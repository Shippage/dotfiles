#!/usr/bin/env bash

help_menu() {
    echo "  install: copies the files over to their expected positions."
    echo "  uninstall: deletes the files"
    echo "  gitsetup: sets up git config files"
    echo "  help: this menu"
}

copy_files() {
    ln -sf $PWD/config/xprofile           $HOME/.xprofile
    ln -sf $PWD/config/cwmrc              $HOME/.cwmrc
    ln -sf $PWD/config/vimrc              $HOME/.vimrc
    ln -sf $PWD/config/bashrc             $HOME/.bashrc
    ln -sf $PWD/config/xinitrc            $HOME/.xinitrc
    ln -sf $PWD/config/redshift.conf      $HOME/.config/redshift.conf
    ln -sf $PWD/config/gtk.css            $HOME/.config/gtk-3.0/gtk.css
    ln -sf $PWD/media/zathura          -T $HOME/.config/zathura
    ln -sf $PWD/config/Xresources      -T $HOME/.Xresources
    ln -s  $PWD/config/xcolors         -T $HOME/.config/xcolors
    ln -s  $PWD/media/firefox/user.js   \
        -T $HOME/.mozilla/*.default-release/user.js
    mkdir $HOME/.mozilla/*.default-release/chrome
    ln -s  $PWD/media/firefox/userChrome.css   \
        -T $HOME/.mozilla/*.default-release/chrome/userChrome.css
}

git_setup() {
    git config --global user.name "Shipp"
    git config --global user.email public@shipp.dev
    git config --global core.editor vim
}

vim() {
     git clone \
         https://github.com/VundleVim/Vundle.vim.git \
         ~/.vim/bundle/Vundle.vim
}

if [[ -z $1 ]]; then
    help_menu
elif [[ $1 == "install" ]]; then
    copy_files
    echo "Install complete"
elif [[ $1 == "gitsetup" ]]; then
    git_setup
else
    echo "Unknown command: $1"
    help_menu
fi

