wp.blocks.registerBlockType('mos/custom-block', {
    title: 'Conpany Contact Information',
    icon: 'email',
    category: 'design',
    attributes: {
        companyName: {type: 'string'},
        companyPhone: {type: 'string'},
        companyAddress: {type: 'string'},
        companyAddress2: {type: 'string'},
        companyCity: {type: 'string'},
        companyState: {type: 'string'},
        companyZip: {type: 'string'},
    },
    edit: function (props){
        return /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("label", {
                for: "",
                children: "Company Name"
              }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("input", {
                type: "text",
                value: "",
                placeholder: "Company Name"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("label", {
                for: "",
                children: "Company Phone"
              }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("input", {
                type: "text",
                value: "",
                placeholder: "Company Phone"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("label", {
                for: "",
                children: "Company Address"
              }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("input", {
                type: "text",
                value: "",
                placeholder: "Company Address"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("label", {
                for: "",
                children: "Company Address Line 2"
              }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("input", {
                type: "text",
                value: "",
                placeholder: "Company Address Line 2"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("label", {
                for: "",
                children: "Company City"
              }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("input", {
                type: "text",
                value: "",
                placeholder: "Company City"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("label", {
                for: "",
                children: "Company State"
              }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("input", {
                type: "text",
                value: "",
                placeholder: "Company State"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("label", {
                for: "",
                children: "Company ZIPcode"
              }), /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("input", {
                type: "text",
                value: "",
                placeholder: "Company ZIPcode"
              })]
            })]
          });
    },
    save: function (props){
        return null;
    },
})