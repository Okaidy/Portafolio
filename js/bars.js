window.onload = function onLoad() {
    var circle = new ProgressBar.Circle('#progress', {
      // color: '#FCB03C',
      // strokeWidth: 10,
       text: {
        // Initial value for text.
        // Default: null
        value: 'Text',

        // Class name for text element.
        // Default: 'progressbar-text'

        // Inline CSS styles for the text element.
        // If you want to modify all CSS your self, set null to disable
        // all default styles.
        // If the style option contains values, container is automatically
        // set to position: relative. You can disable behavior this with
        // autoStyleContainer: false
        // If you specify anything in this object, none of the default styles
        // apply
        // Default: object speficied below
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: 'red',
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: 0,
            margin: 0,
            // You can specify styles which will be browser prefixed
            transform: {
                prefix: true,
                value: 'translate(-50%, -50%)'
            }
        },

      duration: 3000,
      easing: 'easeInOut'

    });
    
    circle.animate(1);
};