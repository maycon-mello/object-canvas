export default class AnimationManager {

  static animationQueue = [];
  static stoped = true;

  static deleteAnimation(animation) {
    AnimationManager.animationQueue = AnimationManager.animationQueue.filter(
      a => a !== animation
    );
  }

  static addAnimation(animation) {
    AnimationManager.animationQueue.push(animation);

    if (AnimationManager.stoped) {
      AnimationManager.stoped = false;
      window.requestNextAnimationFrame(AnimationManager.animate);
    }
  }
  static animate(time) {

    if (AnimationManager.animationQueue.length === 0 || AnimationManager.stop) {
      return;
    }

    AnimationManager.animationQueue.forEach(animation => {
      let now = +new Date();
      animation.animate(now);
    });

    window.requestNextAnimationFrame(AnimationManager.animate);
  }

}
