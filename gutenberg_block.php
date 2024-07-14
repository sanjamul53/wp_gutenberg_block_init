<?php

if(!function_exists('add_action')) {
  echo 'Seems like you stumbled here by accident. 😛';
  exit;
}

define('GTXB5_ROOTPATH', plugin_dir_path(__FILE__));

// plugin_dir_url()


add_action('init', 'gtxb5_register_blocks');


function gtxb5_register_blocks() {

  $blocks = [
    [ 'name' => 'fifa-wc-winner' ]
  ];

  foreach($blocks as $block) {
    register_block_type(
      // UP_PLUGIN_DIR . 'build/blocks/' . $block['name']
      GTXB5_ROOTPATH."build/blocks/". $block['name']
    );
  }

}
