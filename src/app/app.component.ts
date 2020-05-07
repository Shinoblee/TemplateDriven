import { Component } from "@angular/core";
import { User } from "./user";
import { EnrollmentService } from "./enrollment.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private enrollmentService: EnrollmentService) {}

  topics = ["Angular", "React", "Vue"];
  topicHasError = false;
  submitted = false;
  errorMessage = "";

  userModel = new User(
    "Rob",
    "rob@test.com",
    5555555566,
    "default",
    "morning",
    true
  );

  validateTopic(value) {
    value === "default"
      ? (this.topicHasError = true)
      : (this.topicHasError = false);
  }

  onSubmit(userForm) {
    console.log(userForm);
    this.submitted = true;
    this.enrollmentService.enroll(this.userModel).subscribe(
      (data) => console.log("Success", data),
      (error) => (this.errorMessage = error.statusText)
    );
  }
}
