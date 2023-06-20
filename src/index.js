const {registerBlockType} = wp.blocks;
const {RichText, InspectorControls, ColorPalette, MediaUpload, MediaUploadCheck } = wp.editor;
const {PanelBody, IconButton, Button } = wp.components;

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
        }
    },
  
    
    // built-in functions
    
    edit({attributes, setAttributes}){
        const {ctaBackgroundImage, ctaTitle, ctaTitleColor, ctaBody} = attributes;
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
                                <Button 
                                    onClick={ open }
                                    className="editor-media-placeholder__button is-button is-default is-large">Open Media Library</Button>
                            ) }
                        />
                    </MediaUploadCheck>
                </PanelBody>
            </InspectorControls>,
            <div class="cta-container" style={{
                backgroundImage:`url(${ctaBackgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
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
            </div>
        ]);
    },
  
    save({attributes}){
        const {ctaBackgroundImage, ctaTitle, ctaTitleColor, ctaBody} = attributes;
        return (
            <div class="cta-container" style={{
                backgroundImage:`url(${ctaBackgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <h2 style={{color: ctaTitleColor}}>{ctaTitle}</h2>
                <RichText.Content 
                    tagName="p"
                    value={ctaBody} />
            </div>
        );
    },
  });