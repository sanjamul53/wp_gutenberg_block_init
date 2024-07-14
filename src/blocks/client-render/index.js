// import { useState, useEffect } from '@wordpress/element';

import { registerBlockType } from '@wordpress/blocks';
import {
	RichText,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	PanelRow,
	ColorPalette,
	ColorPicker,
	Button,
	TextControl,
} from '@wordpress/components';

import block from './block.json';
import './index.css';

// https://wordpress.github.io/gutenberg - docs

const PREFIX = 'gtxb5';

const colorPlateList = [
	{ name: 'White', color: '#fff' },
	{ name: 'Blue', color: '#00f' },
	{ name: 'Red', color: '#f87171' },
	{ name: 'Black', color: '#000' },
];

registerBlockType(block.name, {
	edit({ attributes, setAttributes }) {
		const { year, country, bgColor, txtColor } = attributes;
		const blockProps = useBlockProps();

		return (
			<>
				<InspectorControls>

          <PanelBody title="Background Color" initialOpen={true}>
						<PanelRow>
							<ColorPalette
								colors={colorPlateList}
								value={bgColor}
								onChange={val => setAttributes({ bgColor: val })}
							/>
						</PanelRow>
					</PanelBody>

					<PanelBody title="Text Color" initialOpen={false}>
						<PanelRow>
							<ColorPicker
								color={txtColor}
								onChange={val => setAttributes({ txtColor: val })}
							/>
						</PanelRow>
					</PanelBody>

				</InspectorControls>

				<div {...blockProps}>
					<RichText.Content
						className="fancy-header"
						tagName="h4"
						value={__('Winner of World Cup', PREFIX)}
					/>

					<TextControl
						onChange={val => setAttributes({ year: val })}
						value={year}
						label="Year of world cup"
					/>

					<TextControl
						onChange={val => setAttributes({ country: val })}
						value={country}
						label="Country Name"
					/>
				</div>
			</>
		);
	},

	save({ attributes }) {

		const { year, country, bgColor, txtColor } = attributes;

    const blockProps = useBlockProps.save({
      className: 'fifa_wc_content_div',
      style: {
        'background-color': bgColor,
        color: txtColor
      }
    });



    return (
      <div {...blockProps} >
        <RichText.Content
          tagName="h2"
          value={`${country} win Fifa WC cup at ${year}`}
          style={{color: txtColor}}
					className="fifa_wc_content"
        />
      </div>
    )
	},

});
