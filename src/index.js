const {registerBlockType} = wp.blocks;
const {
    RichText, // 
    InspectorControls, 
    ColorPalette, 
    MediaUpload, 
    MediaUploadCheck, 
    InnerBlocks, 
    BlockControls,
    AligmentToolbar 
} = wp.editor;
const {
    PanelBody, 
    IconButton, 
    Button, 
    RangeControl 
} = wp.components;
const ALLOWED_BLOCKS = ['core/button'];


registerBlockType('mos/custom-cta',{
    // built-in attributes
    title: 'Call to Action',
    description: 'Block to generate a custom Call to Action',
    icon: 'format-image',
    category: 'layout',
  
    // custom attributes
  
    attributes: {
        content: {
            type: 'string',
        },
        ctaBackgroundImage: {
            type: 'string',
            default: null
        },
        ctaOverlayColor: {
            type: 'string',
            default: '#ffffff'
        },
        ctaOverlayOpacity: {
            type: 'number',
            default: '0.3'
        },
        ctaTitle: {
            type: 'string',
            source: 'html',
            selector: 'h2'
        },
        ctaTitleColor: {
            type: 'string',
            default: '#000000',
        },
        ctaBody: {
            type: 'string',
            source: 'html',
            selector: 'p'
        },
        ctaAlignment: {
            type: 'string',
            default: 'none'
        }
    },
  
    
    // built-in functions
    
    edit: ({attributes, setAttributes}) => {
        const {ctaBackgroundImage, ctaOverlayColor, ctaOverlayOpacity, ctaTitle, ctaTitleColor, ctaBody, ctaAlignment} = attributes;
        // custom functions
        function updateAuthor(event) {
            console.log(event.target.value);
            setAttributes({content: event.target.value});
        };
        // const toggleSetting = () => setAttributes( { mySetting: ! mySetting } );
        
        function onSelectImage(newBackgroundImage) {
            setAttributes({ctaBackgroundImage: newBackgroundImage.sizes.full.url});
        };
        function onChangeTitle(newTitle) {
            setAttributes({ctaTitle: newTitle});
        };
        function onChangeBody(newBody) {
            setAttributes({ctaBody: newBody});
        };
        function onTitleColorChange(newTitleColor) {
            setAttributes({ctaTitleColor: newTitleColor});
        };
        // return <input type="text" value={attributes.content} onChange={x => setAttributes({content: x.target.value})} />;
        // return <input type="text" value={attributes.content} onChange={updateAuthor} />;
        return ([
            <InspectorControls style={{marginBottom: '40px'}}>
                <PanelBody title={'Font Color Settings'}>
                    <p><strone>Select a Title Color: </strone></p>
                    <ColorPalette 
                        value={ctaTitleColor}
                        onChange={onTitleColorChange} />
                </PanelBody>
                <PanelBody title={'Background Image Settings'}>                    
                    <p><strone>Select a Background Image: </strone></p>
                    {/* <MediaUpload
                        type="image"
                        value={ctaBackgroundImage}
                        onSelect={onSelectImage}
                        render={({open}) => {
                            <IconButton
                                onClick={open}
                                icon="upload"
                                className="editor-media-placeholder__button is-button is-default is-large">
                                    Background Image
                            </IconButton>
                        }} /> */}
                    <MediaUploadCheck>
                        <MediaUpload
                            // onSelect={ ( media ) =>
                            //     console.log( 'selected ' + media.length )
                            // }
                            onSelect={onSelectImage}
                            allowedTypes={ "image" }
                            value={ ctaBackgroundImage }
                            render={ ( { open } ) => (
                                <IconButton 
                                    onClick={ open }
                                    icon="upload"
                                    className="editor-media-placeholder__button is-button is-default is-large">Open Media Library</IconButton>
                            ) }
                        />
                    </MediaUploadCheck>          
                    <p><strone>Overlay Color: </strone></p>
                    <ColorPalette 
                        value={ctaOverlayColor}
                        onChange={newOverlayColor => setAttributes({ctaOverlayColor: newOverlayColor})} />
                    <RangeControl
                        title={'Overlay Opacity'}
                        value={ctaOverlayOpacity}
                        onChange={newOverlayOpacity => setAttributes({ctaOverlayOpacity: newOverlayOpacity})}
                        min="0"
                        max="1"
                        step="0.01" />
                </PanelBody>
            </InspectorControls>,
            <div className="cta-container" style={{
                backgroundImage:`url(${ctaBackgroundImage})`,
            }}>
                <div className="cta-overlay" style={{
                    backgroundColor: ctaOverlayColor,
                    opacity: ctaOverlayOpacity,
                }}></div>
                <div className="cta-text-wrapper">
                    
                    <RichText
                        key="editable"
                        tagName="h2"
                        placeholder="Your CTA Title"
                        value={ctaTitle}
                        onChange={onChangeTitle}
                        style={{color: ctaTitleColor}} />
                    <RichText
                        key="editable"
                        tagName="p"
                        placeholder="Your CTA Description"
                        value={ctaBody}
                        onChange={onChangeBody} />
                    <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
                </div>
            </div>
        ]);
    },
  
    save: ({attributes}) => {
        const {ctaBackgroundImage, ctaOverlayColor, ctaOverlayOpacity, ctaTitle, ctaTitleColor, ctaBody, ctaAlignment} = attributes;
        return (
            <div className="cta-container" style={{
                backgroundImage:`url(${ctaBackgroundImage})`,
            }}>
                <div className="cta-overlay" style={{
                    backgroundColor: ctaOverlayColor,
                    opacity: ctaOverlayOpacity,
                }}></div>
                <div className="cta-text-wrapper">
                    <h2 style={{color: ctaTitleColor}}>{ctaTitle}</h2>
                    <RichText.Content 
                        tagName="p"
                        value={ctaBody} />
                    <InnerBlocks.Content />
                </div>
            </div>
        );
    },
  });