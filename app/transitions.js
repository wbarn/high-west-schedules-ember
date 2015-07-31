export default function() {
  // Schedule <-> Event
  this.transition(
    this.fromRoute('schedules.show.index'),
    this.toRoute('schedules.show.events'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  // Editable rows
  this.transition(
    this.hasClass('editable-row'),
    this.toValue(true),
    this.useAndReverse('fade', { duration: 200 })
  );
}
