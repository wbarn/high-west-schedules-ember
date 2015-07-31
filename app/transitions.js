export default function() {
  this.transition(
    this.hasClass('editable-row'),
    this.toValue(true),
    this.useAndReverse('crossFade')
  );
}
