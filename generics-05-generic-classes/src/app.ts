class DataStorage<T> {
  private data: T[] = [];
  
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textS = new DataStorage();
textS.addItem('home');
textS.addItem('baby');
textS.removeItem('mom');
console.log(textS.getItems());

// PartialType
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  // {}' 형식에 'CourseGoal' 형식의 title, description, completeUntil 속성이 없습니다
  // 빈 객체를 할당했기때문임
  // const courseGoal:CourseGoal = {};
  // 타입의 모든 속성을 선택적인 타입으로 바꿔준다 => 필수를 옵션으로 바꿔주는 역할
  // 업데이트할 때 모든 속성을 업데이트 할 수는 없으니까 그럴 때 사용하면 좋을 듯
  const courseGoal: Partial<CourseGoal> = {}
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  // return courseGoal;
  return courseGoal as CourseGoal;
}
