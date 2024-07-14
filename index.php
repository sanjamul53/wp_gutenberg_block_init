<?php
/**
 * Plugin Name: Blocks_new
 * prefix: GTXB5  gtxb5
*/

namespace GTXB5;

if(!function_exists('add_action')) {
  exit;
}

if (!defined('ABSPATH')) {
	exit;
}

class Blocks_Example {

  public function __construct() {

    $this->define_global();
    $this->imports();

    add_action('init', [$this, 'register_blocks']);
    
  }

  function define_global() {
    define('GTXB5_ROOTPATH', plugin_dir_path(__FILE__));
  }

  private function imports() {

    require_once(GTXB5_ROOTPATH."templates/blocks/react_render.php");
    require_once(GTXB5_ROOTPATH."templates/blocks/server-render.php");

  }


  public function register_blocks() {

    $blocks = [

      [ 'name' => 'client-render' ],

      [ 'name' => 'server-render', 
      'options' => [
        'render_callback' => 'GTXB5\Templates\Blocks\server_render_cb'
        ]
      ],

      [ 
        'name' => 'react-render',
        'options' => [
          'render_callback' => 'GTXB5\Templates\Blocks\react_render_cb'
        ]
      ]

    ];
  
    foreach($blocks as $block) {
      register_block_type(
        GTXB5_ROOTPATH."build/blocks/". $block['name'],
        isset($block['options']) ? $block['options'] : []
      );
    }


  }



}

$gtxb5_block_example = new Blocks_Example();