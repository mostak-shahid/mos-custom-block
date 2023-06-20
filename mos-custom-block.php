<?php 
/**
 * Plugin Name:       Mos Custom Block
 * Plugin URI:        http://www.mdmostakshahid.com/
 * Description:       Base of future block development plugin
 * Version:           1.0.0
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
    //wp_enqueue_script( 'mos-custom-block', plugin_dir_url( __FILE__ ).'mos-custom-block.js', array('wp-blocks', 'wp-i18n', 'wp-editor'), true, false );
}
//add_action( 'enqueue_block_editor_assets', 'mos_custom_block_enqueue_scripts' );


function mos_custom_gutenberg_default_colors(){
    add_theme_support(
        'editor-color-palette', 
        array(
            array(
                'name' => 'White',
                'slug' => 'white',
                'color' => '#ffffff'
            ),
            array(
                'name' => 'Black',
                'slug' => 'black',
                'color' => '#000000'
            ),
            array(
                'name' => 'Pink',
                'slug' => 'pink',
                'color' => '#ff4444'
            )

        )
    );
    add_theme_support(
        'editor-font-sizes',
        array(
            array(
                'name' => 'Normal',
                'slug' => 'normal',
                'size' => 16
            ),
            array(
                'name' => 'Large',
                'slug' => 'large',
                'size' => 24
            )
        )
    );
} 
add_action( 'init', 'mos_custom_gutenberg_default_colors' );

function mos_custom_gutenberg_blocks(){
    wp_register_script(
        'mos-cta-block', 
        //plugin_dir_url( __FILE__ ).'mos-cta-block.js', 
        plugin_dir_url( __FILE__ ).'build/index.js', 
        array('wp-blocks', 'wp-editor', 'wp-components')
    );
    register_block_type(
        'mos/custom-cta', 
        array(
            'editor_script' => 'mos-cta-block'
        )
    );
}
add_action( 'init', 'mos_custom_gutenberg_blocks' );