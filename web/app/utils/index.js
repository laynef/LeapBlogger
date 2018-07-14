const fileNames = [
	'methods',
	'dates',
	'globals',
	'fetch',
	'AnimationWrapper',
	'blackListAnimationRoutes',
];

const allMethods = fileNames.reduce((acc, item) => {
	return { ...acc, ...require(`./methods/${item}`) };
}, {});

export default allMethods;
