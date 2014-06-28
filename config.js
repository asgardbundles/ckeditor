/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	// %REMOVE_START%
	config.filebrowserBrowseUrl = $('base').attr('href')+'../ckeditor/kcfinder/browse.php?type=files';
	config.filebrowserImageBrowseUrl = $('base').attr('href')+'../ckeditor/kcfinder/browse.php?type=images';
	config.filebrowserFlashBrowseUrl = $('base').attr('href')+'../ckeditor/kcfinder/browse.php?type=flash';
	config.filebrowserUploadUrl = $('base').attr('href')+'../ckeditor/kcfinder/upload.php?type=files';
	config.filebrowserImageUploadUrl = $('base').attr('href')+'../ckeditor/kcfinder/upload.php?type=images';
	config.filebrowserFlashUploadUrl = $('base').attr('href')+'../ckeditor/kcfinder/upload.php?type=flash';

	config.extraPlugins = 'youtube';

	config.removePlugins = 'elementspath';

	config.toolbar = [
			// { name: 'document', items : [ 'Source','-','Save','NewPage','Preview','Print','-','Templates' ] },
			{ name: 'document', items : [  'Source' ] },
			// { name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
			{ name: 'clipboard', items : [ 'PasteText','-','Undo','Redo' ] },
			// { name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
			// '/',
			{ name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','-','RemoveFormat' ] },
			{ name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-'] },
			{ name: 'links', items : [ 'Link','Unlink' ] },
			{ name: 'insert', items : [ 'Image',
			// 'Flash',
			'Table','HorizontalRule','SpecialChar'] },
			'/',
			{ name: 'styles', items : [ 'Format','FontSize' ] },
			{ name: 'colors', items : [ 'TextColor','BGColor' ] },
			// ,
			// { name: 'tools', items : [ 'Maximize', 'ShowBlocks'] }
			{ name: 'tools', items : [ 'Maximize'] }, { name: 'videos', items : [ 'vimeo', 'Youtube'] }
	];

	config.plugins =
		'about,' +
		'a11yhelp,' +
		'basicstyles,' +
		'bidi,' +
		'blockquote,' +
		'clipboard,' +
		'colorbutton,' +
		'colordialog,' +
		'contextmenu,' +
		'dialogadvtab,' +
		'div,' +
		'elementspath,' +
		'enterkey,' +
		'entities,' +
		'filebrowser,'+
		'find,' +
		'flash,' +
		'floatingspace,' +
		'font,' +
		'format,' +
		'forms,' +
		'horizontalrule,' +
		'htmlwriter,' +
		'image,' +
		'iframe,' +
		'indentlist,' +
		'indentblock,' +
		'justify,' +
		'language,' +
		'link,' +
		'list,' +
		'liststyle,' +
		'magicline,' +
		'maximize,' +
		'newpage,' +
		'pagebreak,' +
		'pastefromword,' +
		'pastetext,' +
		'preview,' +
		'print,' +
		'removeformat,' +
		'resize,' +
		'save,' +
		'selectall,' +
		'showblocks,' +
		'showborders,' +
		'smiley,' +
		'sourcearea,' +
		'specialchar,' +
		'stylescombo,' +
		'tab,' +
		'table,' +
		'tabletools,' +
		'templates,' +
		'toolbar,' +
		'undo,' +
		'wysiwygarea';
	// %REMOVE_END%
};

// %LEAVE_UNMINIFIED% %REMOVE_LINE%
