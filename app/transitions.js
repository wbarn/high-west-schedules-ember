export default function() {
  this.transition(
    this.hasClass('production-item-editable-row'),
    this.toValue(true),
    this.useAndReverse('fade')
  );
}
