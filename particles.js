particlesJS("particles", {
    particles: {
        number: { 
            value: 80, 
            density: { 
                enable: true, 
                value_area: 800 
            } 
        },
        color: { 
            value: "#2563eb" 
        },
        shape: { 
            type: "circle" 
        },
        opacity: {
            value: 0.5,
            random: true,
            animation: { 
                enable: true, 
                speed: 1, 
                minimumValue: 0.1, 
                sync: false 
            }
        },
        size: {
            value: 3,
            random: true,
            animation: { 
                enable: true, 
                speed: 2, 
                minimumValue: 0.1, 
                sync: false 
            }
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            outModes: { 
                default: "out" 
            },
            attract: { 
                enable: false, 
                rotateX: 600, 
                rotateY: 1200 
            }
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: { 
                enable: true, 
                mode: "repulse" 
            },
            resize: true
        },
        modes: {
            repulse: { 
                distance: 100, 
                duration: 0.4 
            }
        }
    },
    retina_detect: true
});