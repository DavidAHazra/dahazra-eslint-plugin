function checkElementHasAttribute(node, attributeName, messageId, context) {
    const attribute = node.attributes.find(attribute => attribute.name.name === attributeName);

    if (!attribute) {
        context.report({
            node,
            messageId,
            data: {
                attributeName,
            },
        });
    }

}

module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce required attributes on the Next.js Image component',
            category: 'Best Practices',
            recommended: true,
        },
        schema: [],
        fixable: null,
        messages: {
            missingSizes: "The 'sizes' attribute is required on the Image component.",
            missingQuality: "The 'quality' attribute is required on the Image component.",
            missingPriority: "The 'priority' attribute is required on the Image component.",
            missingPlaceholder: "The 'placeholder' attribute is required on the Image component.",
        },
    },
    create: function(context) {
        return {
            JSXOpeningElement: function(node) {
                if (node.name.name !== 'Image') {
                    return;
                }
    
                checkElementHasAttribute(node, 'sizes', 'missingSizes', context);
                checkElementHasAttribute(node, 'quality', 'missingQuality', context);
                checkElementHasAttribute(node, 'priority', 'missingPriority', context);
                checkElementHasAttribute(node, 'placeholder', 'missingPlaceholder', context);
            },
        }
    }
}
