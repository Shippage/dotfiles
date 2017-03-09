" useful guide: https://dougblack.io/words/a-good-vimrc.html

" :w!! 
" write the file when you accidentally opened it without the right (root) privileges
cmap w!! w !sudo tee % > /dev/null " (thanks CIA)

set nocompatible

" Vundle config https://github.com/VundleVim/Vundle.vim
filetype off "required for Vundle
" add Vundle to runtime and init.
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
Plugin 'VundleVim/Vundle.vim'
Plugin 'tpope/vim-fugitive'
Plugin 'L9'
Plugin 'git://git.wincent.com/command-t.git'
Plugin 'file:///home/gmarik/path/to/plugin'
Plugin 'rstacruz/sparkup', {'rtp': 'vim/'}
Plugin 'ascenator/L9', {'name': 'newL9'}
call vundle#end()
filetype plugin indent on " vundle required

" Themes
syntax enable
"colorscheme codedark " codedark theme

" not sure what these do yet...
set exrc
set secure

" tab settings
set tabstop=4
set softtabstop=4
set shiftwidth=4
set noexpandtab "tabs for lyfeee

set number " show line numbers
set showcmd " show command line at bottom
"set cursorline " highlight current line (kinda ugly, depends on colorscheme)

" Specific filetype settings based upon the file extension.
" Ex: ~/.vim/indent/python.vim will be loaded when opening a *.py file.
filetype indent on 

set wildmenu " useful auto-complete feature for TAB, like what bash does.

set foldenable " enable folding, still unsure what that means...
set foldlevelstart=10
set foldnestmax=10
