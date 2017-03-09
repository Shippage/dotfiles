" useful guide: https://dougblack.io/words/a-good-vimrc.html

" :w!! 
" write the file when you accidentally opened it without the right (root) privileges
cmap w!! w !sudo tee % > /dev/null " (thanks CIA)

set nocompatible

syntax enable
"colorscheme codedark

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
