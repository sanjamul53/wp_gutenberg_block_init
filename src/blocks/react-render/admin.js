import { registerBlockType } from '@wordpress/blocks';
import { TextControl} from "@wordpress/components";
import { useBlockProps} from '@wordpress/block-editor';
import block from './block.json'

// disable to save, if proper input is not provided
(function () {

  let locked = false

  wp.data.subscribe(function () {

    const invalidBlock = wp.data
    .select("core/block-editor")
    .getBlocks()
    .find(bk => {
      return bk.name === block.name && (
        !bk.attributes.hasOwnProperty('countLimit') ||
        bk.attributes.countLimit === undefined ||
        bk.attributes.countLimit == ''
      );
    });
    
    if (invalidBlock && locked === false) {
      locked = true
      wp.data.dispatch("core/editor").lockPostSaving('missing-countLimit');
    }

    if (!invalidBlock && locked) {
      locked = false
      wp.data.dispatch("core/editor").unlockPostSaving('missing-countLimit');
    }

  })
})();

registerBlockType(block.name, {

  edit({ attributes, setAttributes }) {

    const { countLimit } = attributes;

    const blockProps = useBlockProps({
      className: "paying-attention-edit-block",
      // style: { backgroundColor: '#ccc' }
    });

    return (
      <>
        <div {...blockProps}>

          <TextControl
            type="number"
						onChange={val => setAttributes({ countLimit: Number(val) })}
						value={countLimit}
						label="Count Limit"
					/>

        </div>
      </>
    )

  },

  save(){
    return null;
  }

})