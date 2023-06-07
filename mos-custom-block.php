<?php 
/**
 * Plugin Name:       Mos Custom Block
 * Plugin URI:        http://www.mdmostakshahid.com/
 * Description:       Base of future plugin
 * Version:           0.0.1
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Md. Mostak Shahid
 * Author URI:        http://www.mdmostakshahid.com/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        http://www.mdmostakshahid.com/
 * Text Domain:       mos-custom-block
 * Domain Path:       /languages
**/

function mos_custom_block_enqueue_scripts(){
    //plugin_dir_url( __FILE__ ).
    //wp_enqueue_style( 'show-hint', plugins_url( 'plugins/CodeMirror/addon/hint/show-hint.css', __FILE__ ) );
    //wp_enqueue_script( 'codemirror', plugins_url( 'plugins/CodeMirror/lib/codemirror.js', __FILE__ ), array('jquery') );
    wp_enqueue_script( 'mos-custom-block', plugin_dir_url( __FILE__ ).'mos-custom-block.js', array('wp-blocks', 'wp-i18n', 'wp-editor'), true, false );

}
add_action( 'enqueue_block_editor_assets', 'mos_custom_block_enqueue_scripts' );