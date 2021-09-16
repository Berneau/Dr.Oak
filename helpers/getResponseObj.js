module.exports = (id, scene, message) => ({
  session: {
    id,
    params: {}
  },
  scene: {
    ...scene,
    next: {
      name: 'actions.scene.END_CONVERSATION'
    }
  },
  prompt: {
    override: false,
    firstSimple: {
      speech: message,
      text: message
    }
  }
});
