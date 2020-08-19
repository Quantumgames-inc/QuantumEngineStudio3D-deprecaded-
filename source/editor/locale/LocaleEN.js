/**
 * Locale EN defines text of the GUI for the English language.
 * 
 * @static
 * @class LocaleEN
 */
var LocaleEN = {
	// Metadata
	meta:
	{
		language: "EN",
		name: "English",
		version: 1
	},

	// Actions
	reverse: "Reverse",
	delete: "Delete",
	copy: "Copy",
	paste: "Paste",
	cut: "Cut",
	duplicate: "Duplicate",
	rename: "Rename",
	renameObject: "Rename object",
	renameMaterial: "Rename material",
	renameTexture: "Rename texture",
	renameFont: "Rename font",
	deleteObjects: "Delete objects?",
	deleteMaterial: "Delete material?",
	deleteTexture: "Delete texture?",
	select: "Select",
	redo: "Redo",
	undo: "Undo",
	add: "Add",
	mix: "Mix",
	multiply: "Multiply",
	setTransparent: "Set transparent",
	mergeGeometries: "Merge Geometries",
	executeScript: "Execute Script",
	
	// Context menu
	computeNormals: "Compute Normals",
	applyTransformation: "Apply Transformation",
	sceneEditor: "Scene Editor",
	objectEditor: "Object Editor",
	scriptEditor: "Script Editor",
	particleEditor: "Particle Editor",
	centerOrigin: "Center Origin",
	enable: "Enable",
	disable: "Disable",
	static: "Static",
	kinematic: "Kinematic",
	dynamic: "Dynamic",
	createScene: "Create scene",
	toInstancedMesh: "To Instanced Mesh",

	// Devices
	leapMotion: "Leap Motion",
 	microsoftKinect: "Microsoft Kinect",

	// Objects
	ambientLight: "Ambient Light",
	pointLight: "Point Light",
	spotLight: "Spot Light",
	directionalLight: "Directional Light",
	hemisphereLight: "Hemisphere Light",
	rectAreaLight: "Rectarea Light",
	lighProbe: "Light Probe",
	particleEmitter: "Particle Emitter",
	cubeCamera: "Cube camera",
	positionalAudio: "Positional Audio",
	audio: "Audio",
	container: "Container",
	sprite: "Sprite",
	perspectiveCamera: "Perspective Camera",
	orthographicCamera: "Orthographic Camera",
	lensFlare: "Lens flare",
	htmlView: "HTML View",
	orbitControls: "Orbit Controls",
	firstPersonControls: "First Person Controls",
	particle: "Particle",
	ground: "Ground",
	spineAnimation: "Spine Animation",
	camera: "Camera",
	textMesh: "Text Mesh",
	textBitmap: "Text Bitmap",
	textSprite: "Text Sprite",

	// Geometries
	parametric: "Parametric",
	box: "Box",
	capsule: "Capsule",
	dodecahedron: "Dodecahedron",
	octahedron: "Octahedron",
	tetrahedron: "Tetrahedron",
	icosahedron: "Icosahedron",
	sphere: "Sphere",
	disc: "Disc",
	plane: "Plane",
	circle: "Circle",
	ring: "Ring",
	cylinder: "Cylinder",
	convexHull: "ConvexHull",
	cube: "Cube",
	torus: "Torus",
	torusKnot: "Torus-Knot",
	cone: "Cone",
	roundedBox: "Rounded Box",
	terrain: "Terrain",

	// Textures
	spriteSheetTexture: "SpriteSheet Texture",
	cubeTexture: "Cube Texture",
	canvasTexture: "Canvas Texture",
	videoTexture: "Video Texture",
	webcamTexture: "Webcam Texture",

	// Materials
	standardMaterial: "Standard Material",
	physicalMaterial: "Physical Material",
	phongMaterial: "Phong Material",
	basicMaterial: "Basic Material",
	toonMaterial: "Toon Material",
	lambertMaterial: "Lambert Material",
	matcapMaterial: "Matcap Material",
	spriteMaterial: "Sprite Material",
	pointsMaterial: "Points Material",
	lineMaterial: "Line Material",
	lineDashedMaterial: "Line Dashed Material",
	shaderMaterial: "Shader Material",
	rawShaderMaterial: "Raw Shader Material",
	normalMaterial: "Normal Material",
	depthMaterial: "Depth Material",
	distanceMaterial: "Distance Material",
	shadowMaterial: "Shadow Material",

	// Properties
	sizeAttenuation: "Size Attenuation",
	particleRate: "Particle Rate",
	particleCount: "Particle Count",
	animation: "Animation",
	stacks: "Stacks",
	slices: "Slices",
	lockPointer: "Lock Pointer",
	roomScale: "Room Scale",
	moveSpeed: "Move Speed",
	movePlane: "Move Plane",
	kernelRadius: "Kernel Radius",
	kernelSize: "Kernel Size",
	speed: "Speed",
	focus: "Focus",
	postProcessing: "Post-Processing",
	html: "HTML",
	javascript: "JavaScript",
	nodeGraph: "Node Graph",
	ignorePixelRatio: "Ignore Device Pixel Ratio",
	units: "Units",
	libraryMode: "Library Mode",
	min: "Min",
	max: "Max",
	spread: "Spread",
	base: "Base",
	variation: "Variation",
	initial: "Initial",
	acceleration: "Acceleration",
	wiggle: "Wiggle",
	velocity: "Velocity",
	damping: "Damping",
	friction: "Friction",
	invertNavigation: "Invert Navigation",
	penumbra: "Penumbra",
	angle: "Angle",
	distance: "Distance",
	zoomSpeed: "Zoom Speed",
	limitDown: "Limit Down",
	limitUp: "Limit Up",
	requireButton: "Require Button",
	sensitivity: "Sensitivity",
	movement: "Movement",
	maxDistance: "Max. Distance",
	minDistance: "Min. Distance",
	emitterType: "Emitter Type",
	dynamicEmitter: "Dynamic Emitter",
	linearDamping: "Linear Damping",
	angularDamping: "Angular Damping",
	lockRotation: "Lock Rotation",
	physicsGroup: "Physics Group",
	allowSleep: "Allow Sleep",
	sleepSpeedLimit: "Sleep Speed Limit",
	sleepTimeLimit: "Sleep Time Limit",
	mass: "Mass",
	duration: "Duration",
	backward: "Backward",
	forward: "Forward",
	direction: "Direction",
	texture: "Texture",
	count: "Count",
	name: "Name",
	side: "Side",
	position: "Position",
	rotation: "Rotation",
	scale: "Scale",
	uuid: "UUID",
	repeat: "Repeat",
	offset: "Offset",
	center: "Center",
	wrapHor: "Wrap Hor.",
	wrapVert: "Wrap Vert.",
	clampEdge: "Clamp to Edge",
	repeatMirror: "Repeat Mirrored",
	premulAlpha: "Premul. Alpha",
	vector: "Vector",
	type: "Type",
	physics: "Physics",
	size: "Size",
	viewport: "Viewport",
	mode: "Mode",
	anchor: "Anchor",
	antialiasing: "Antialiasing",
	exposure: "Exposure",
	backend: "Back-end",
	whitepoint: "Whitepoint",
	tonemapping: "Tonemapping",
	shadows: "Shadows",
	shadowType: "Shadows type",
	shadowsAutoUpdate: "Shadow Auto Update",
	autoClear: "Auto Clear",
	autoClearColor: "Auto Clear Color",
	autoClearDepth: "Auto Clear Depth",
	autoClearStencil: "Auto Clear Stencil",
	checkShaderErrors: "Check Shaders",
	clearColor: "Clear color",
	clearDepth: "Clear depth",
	clearStencil: "Clear stencil",
	stencil: "Stencil",
	sortObjects: "Sort objects",
	gammaFactor: "Gamma Factor",
	gammaInput: "Gamma Input",
	gammaOutput: "Gamma Output",
	precision: "Precision",
	alpha: "Alpha",
	dithering: "Dithering",
	premultipliedAlpha: "Premultiply Alpha",
	preserveDrawingBuffer: "Preserver Buffers",
	powerPreference: "Power Preference",
	logarithmicDepthBuffer: "Logaritmic Depth",
	physicallyCorrectLights: "Physically Correct Lights",
	depthWrite: "Depth Write",
	depthTest: "Depth Test",
	depthMode: "Depth Mode",
	background: "Background",
	fog: "Fog",
	color: "Color",
	density: "Density",
	near: "Near",
	far: "Far",
	zoom: "Zoom",
	wireframe: "Wireframe",
	wireframeLinewidth: "Wireframe Line Width",
	wireframeLinecap: "Wireframe Line Cap",
	wireframeLinejoin: "Wireframe Line Join",
	transparent: "Transparent",
	opacity: "Opacity",
	alphaTest: "Alpha test",
	blendingMode: "Blending Mode",
	useCamera: "Use camera",
	renderOrder: "Render order",
	fov: "FOV",
	shininess: "Shininess",
	specular: "Specular",
	clippingPlanes: "Clipping planes",
	iterations: "Iterations",
	tolerance: "Tolerance",
	gravity: "Gravity",
	usePhysics: "Use physics",
	defaultScene: "Default scene",
	intensity: "Intensity",
	time: "Time",
	shading: "Shading",
	skinning: "Skinning",
	roughness: "Roughness",
	metalness: "Metalness",
	bias: "Bias",
	refraction: "Refraction",
	morphTargets: "Morph Targets",
	clearcoatMap: "Clear Coat Map",
	clearcoatRoughnessMap:  "Clear Coat Roughness Map",
	textureMap: "Texture Map",
	gradientMap: "Gradient Map",
	specularMap: "Specular Map",
	lightMap: "Light Map",
	bumpMap: "Bump Map",
	roughnessMap: "Roughness Map",
	metalnessMap: "Metalness Map",
	normalMap: "Normal Map",
	displacementMap: "Displacement Map",
	emissiveMap: "Emissive Map",
	alphaMap: "Alpha Map",
	environmentMap: "Environment Map",
	ambientOcclusion: "Ambient Occlusion",
	sky: "Sky",
	castShadows: "Cast Shadows",
	receiveShadows: "Receive Shadows",
	sunDistance: "Sun Distance",
	autoUpdate: "Auto Update",
	skyColor: "Sky Color",
	groundColor: "Ground Color",
	mapping: "Mapping",
	minFilter: "Min. Filter",
	magFilter: "Mag. Filter",
	flipY: "Flip Y",
	toneMapped: "Tone Mapped",
	text: "Text",
	thickness: "Thickness",
	bevel: "Bevel",
	lineHeight: "Line Height",
	letterSpacing: "Letter Spacing",
	align: "Align",
	smoothing: "Smoothing",
	threshold: "Threshold",
	shader: "Shader",
	vertexColors: "Vertex Colors",
	flatShading: "Flat Shading",
	outline: "Outline",
	outlineColor: "Outline color",
	outlineWidth: "Outline Width",
	polygonOffset: "Polygon Offset",
	polygonOffsetFactor: "Polygon Offset Factor",
	polygonOffsetUnits: "Polygon Offset Units",
	loop: "Loop",
	volume: "Volume",
	enabled: "Enabled",
	fragment: "Fragment",
	vertex: "Vertex",
	age: "Age",
	bumpScale: "Bump Scale",
	normalScale: "Normal Scale",
	normalType: "Normal Type",
	reflectivity: "Reflectivity",
	transparency: "Transparency",
	clearcoat: "Clear Coat",
	clearcoatRoughness: "Clear Coat Roughness",
	clearcoatNormalMap: "Clear Coat Normal Map",
	clearcoatNormalScale: "Clear Coat Normal Scale",
	refractionRatio: "Refraction Ratio",
	version: "Version",
	author: "Author",
	virtualReality: "Virtual Reality",
	augmentedReality: "Augmented Reality",
	pixelRatio: "Pixel Ratio",
	radius: "Radius",
	segments: "Segments",
	radiusSegments: "Radius Segments",
	detail: "Detail",
	radial: "Radial",
	tubular: "Tubular",
	buffered: "Buffered",
	thetaStart: "Theta Start",
	thetaLength: "Theta Length",
	thetaSegments: "Theta Segments",
	phiStart: "Phi Start",
	phiLength: "Phi Length",
	phiSegments: "Phi Segments",
	innerRadius: "Inner Radius",
	outerRadius: "Outer Radius",
	tube: "Tube",
	arc: "Arc",
	axisWinds: "Axis Winds",
	circleWinds: "Circle Winds",

	// Units
	degrees: "Degrees",
	radians: "Radians",
	meters: "Meters",

	// Values
	cross: "Cross",
	equirectangular: "Equirectangular",
	cubeReflection: "Cube Reflection",
	cubeRefraction: "Cube Refraction",
	equirectangularReflection: "Equirectangular Reflection",
	equirectangularRefraction: "Equirectangular Refraction",
	cubeUvReflection: "Cube UV Reflection",
	cubeUvRefraction: "Cube UV Refraction",
	mipNearestNearest: "MIP Nearest Nearest",
	mipNearestLinear: "MIP Nearest Linear",
	mipLinearNearest: "MIP Linear Nearest",
	mipLinearLinear: "MIP Linear Linear",
	evaluate: "Evaluate",
	append: "Append",
	include: "Include",
	tangentSpace: "Tangent Space",
	objectSpace: "Object Space",
	relative: "Relative",
	absolute: "Absolute",
	bottomRight: "Bottom-Right",
	bottomLeft: "Bottom-Left",
	topRight: "Top-Right",
	topLeft: "Top-Left",
	firstPerson: "First-Person",
	orbit: "Orbit",
	left: "Left",
	right: "Right",
	front: "Front",
	back: "Back",
	top: "Top",
	bottom: "Bottom",
	local: "Local",
	world: "World",
	highp: "High Precision",
	mediump: "Medium Precision",
	lowp: "Low Precision",
	highPerformance: "High Performance",
	lowPower: "Low power",
	default: "Default",
	never: "Never",
	always: "Always",
	double: "Double",
	less: "Less",
	lessOrEqual: "Less or Equal",
	greater: "Greater",
	greaterOrEqual: "Greater or Equal",
	notEqual: "Not equal",
	none: "None",
	linear: "Linear",
	exponential: "Exponential",
	normal: "Normal",
	additive: "Additive",
	subtractive: "Subtractive",
	horizontal: "Horizontal",
	vertical: "Vertical",
	smooth: "Smooth",
	flat: "Flat",
	width: "Width",
	height: "Height",
	depth: "Depth",
	resolution: "Resolution",
	webgl: "WebGL 1.0",
	webgl2: "WebGL 2.0",
	nearest: "Nearest",

	// Operations
	union: "Union",
	subtract: "Subtract",
	intersect: "Intersect",
	simplify: "Simplify",
	subdivide: "Subdivide",
	twist: "Twist",

	// Editor
	initialization: "Initialization",
	update: "Update",
	resize: "Resize",
	attribute: "Attribute",
	console: "Console",
	custom: "Custom",
	binary: "Binary",
	modifiers: "Modifiers",
	useTexture: "Use Texture",
	configuration: "Configuration",
	profiling: "Profiling",
	groupObjects: "Group Objects",
	create: "Create",
	code: "Code",
	more: "More",
	csg: "CSG",
	editor: "Editor",
	focusObject: "Focus Object",
	information: "Information",
	rendering: "Rendering",
	project: "Project",
	run: "Run",
	stop: "Stop",
	new: "New",
	save: "Save",
	saveAs: "Save as",
	load: "Load",
	settings: "Settings",
	publish: "Publish",
	import: "Import",
	export: "Export",
	exit: "Exit",
	selectAll: "Select all",
	render: "Render",
	tools: "Tools",
	about: "About",
	search: "Search",
	rotate: "Rotate",
	replace: "Replace",
	replaceAll: "Replace All",
	clear: "Clear",
	cameraNavigation: "Camera Navigation Mode",
	cameraMode: "Change Camera Mode",
	toggleSnapToGrid: "Toggle Snap to Grid",
	scene: "Scene",
	move: "Move",
	play: "Play",
	selectObjects: "Select Objects",
	calculateProbe: "Calculate Light",
	codeEditor: "Code Editor",
	refactor: "Refactor",
	documentation: "Documentation",
	autoIndent: "Auto Indent",

	// Editor settings
	reset: "Reset",
	general: "General",
	theme: "Theme",
	historySize: "History size",
	hintHistory: "How many changes are stored in the history.",
	
	// Resources
	image: "Image",
	video: "Video",
	file: "File",
	material: "Material",
	geometry: "Geometry",
	font: "Font",
	models3D: "3D Models",

	// Run tab
	toggleVR: "Toggle Virtual Reality",
	toggleAR: "Toggle Augmented Reality",
	toggleFullscreen: "Toggle Fullscreen",

	// Messages
	projectSaved: "Project saved.",
	projectLoaded: "Project loaded",
	projectExported: "Project exported",

	// Confirm
	changesWillBeLost: "All unsaved changes to the project will be lost!",
	loadProject: "Load project from file?",
	createProject: "Create new project?",
	exportOnlyVisibleObjects: "Export only the visible objects from the project?",
	
	// Warnings
	unsavedChangesExit: "All unsaved changes to the project will be lost. Do you really wanna exit?",
	cannotAddItself: "Cannot add object into itself.",
	cannotAddToChildren: "Cannot add object into is children.",
	nothingToRedo: "Nothing to redo!",
	nothingToUndo: "Not possible to undo any further",
	openTabToEditContent: "Open new tab to edit content or create new project",
	needsObjectGeometry: "Operation needs an object that contains a geometry.",
	needsObjectMesh: "Operation needs a mesh object.",
	needsTwoObjectMesh: "Operation needs two mesh object.",
	needsTwoObjectGeometry: "Operation needs two objects with geometries",
	needsTwoObjects: "Operation needs two objects.",
	selectObjectEditAnimation: "Select an object to edit animation.",
	nothingToShow: "Select an object to view its properties.",
	selectObjectFirst: "Need to select an object first before performing this operation.",

	// Errors
	errorExportingProject: "Error exporting project",
	errorLoadingFile: "Error loading file",
	errorSavingFile: "Error saving file",
	errorPaste: "Error pasting object",
	errorRunInitialize: "Error while initializing program.",
	errorRunpdate: "Error while running program.",
	errorRunRender: "Error while rendering program.",
	webglNotSupported: "WebGL is not supported or is disabled.\nnunuStudio cannot run.",
	unknownFileFormat: "Unknown file format.",
	failedLoadSpine: "Failed to load Spine animation, make sure that .json and .atlas have the same name.",

	// Hints
	hintLibraryMode: "Indicates how libraries are imported into the script. They can be evaluated in the script context, appended at the beginning of the script or included globally.",
	hintCheckShaderErrors: "Defines whether material shader programs are checked for errors during compilation and linkage process.",
	hintStencil: "Whether the drawing buffer has a stencil buffer of at least 8 bits.",
	hintSortObjects: "If true the renderer sorts the objects from back to front for rendering. Important if using multiple transparent objects.",
	hintAlpha: "Whether the canvas contains an alpha (transparency) buffer or not.",
	hintAntialiasing: "Antialiasing can be used to smooth jaged edges.",
	hintBackend: "Prefered redering backend API to use if available. Shader code might not be cross compatible between rendering backends.",
	hintPremultipliedAlpha: "Whether the renderer will assume that colors have premultiplied alpha.",
	hintLogarithmicDepthBuffer: "Whether to use a logarithmic depth buffer. It may be neccesary to use this if dealing with huge differences in scale in a single scene.",
	hintRenderOrder: "Camera with lower order gets rendered first.",
	hintShadowsAutoUpdate: "Enables automatic updates to the shadows in the scene. If you do not require dynamic lighting / shadows, you may set this to false.",
	hintPrecision: "Shader precision. Can be \"highp\", \"mediump\" or \"lowp\". Defaults to \"highp\" if supported by the device.",
	hintPowerPreference: "Provides a hint to the user agent indicating what configuration of GPU is suitable for this WebGL context.",
	hintTonemapping: "Tonemapping can be used to remap the color of the image to a diferent set giving the scene a different color mood and/or dynamic color based on global luminosity.",
	hintAutoClearColor: "Defines whether the renderer should clear the color buffer.",
	hintAutoClearDepth: "Defines whether the renderer should clear the depth buffer.",
	hintAutoClearStencil: "Defines whether the renderer should clear the stencil buffer.",
	hintPhysicallyCorrectLights: "Whether to use physically correct lighting mode.",
	hintIgnorePixelRatio: "Ignore the device pixel ratio rendering image. May be required in some devices for correct image display.",
	hintShadowBias: "How much to add or subtract from the normalized shadow depth. May help reduce artefacts",
	hintPhysicsMode: "Indicates how coordinates from the physics engine are transformed into object coordinates.",
	hintPhysicsType: "Defines how the physics object is update, static do not move, kinematic have constant velocity and dynamic are fully updated.",

	// Update
	updatedRestart: "nunuStudio updated\nRestart the editor",
	alreadyUpdated: "nunuStudio already up to date.",
	updateFailed: "Failed to download update files."
};

export {LocaleEN};
