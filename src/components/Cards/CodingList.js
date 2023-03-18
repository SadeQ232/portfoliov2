export const codeObject = {
  python: [
    "  class Person:",
    "    def __init__(self,name,dateOfBirth=1989):",
    '      self.name="Septian Librianto"',
    "      self.age=datetime.datetime.now().year-dateOfBirth",
  ],
  java: [
    "  public class Person:{",
    "      String final name;",
    "      int final dateOfBirth;",
    "      public Person(String name,int dateOfBirth){",
    '        this.name="Septian Librianto";',
    "        this.age=Calendar.getInstance()",
    "          .get(Calendar.YEAR)-dateOfBirth}}",
  ],
  js: [
    "  class Person{",
    "    constructor(name,dateOfBirth=1989){",
    '      this.name="Septian Librianto"',
    "      this.age = new Date().getFullYear() - dateOfBirth",
    "      }",
    "  }",
  ],
}
