<?php

namespace GTXB5\Templates\Blocks;


function react_render_cb($attr) {

  $countLimit = esc_attr($attr['countLimit']);
  
  ob_start();
  ?>

    <div class="gtxb5_reactRender" >
      <h1>
        <?php echo $countLimit; ?>
      </h1>
    </div>

  <?php

  $output = ob_get_contents();
  ob_end_clean();

  return $output;
}