import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Meta, Title } from "@angular/platform-browser";
import { CanonicalService } from "../services/canonical.service";
import { ContactService } from "../services/contact.service";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent implements OnInit {
  FormData: FormGroup;
  constructor(
    private builder: FormBuilder,
    private contact: ContactService,
    private title: Title,
    private metaTagService: Meta,
    private canonicalService: CanonicalService
  ) {}

  ngOnInit(): void {
    this.canonicalService.setCanonicalURL();
    this.FormData = this.builder.group({
      Fullname: new FormControl("", [Validators.required]),
      Email: new FormControl("", [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      Comment: new FormControl("", [Validators.required]),
    });
    this.title.setTitle("Contact Us");
    this.metaTagService.updateTag({
      name: "description",
      content: "Contact RegisterToVoteZW team",
    });
  }

  onSubmit(FormData) {
    console.log(FormData);
    this.contact.PostMessage(FormData).subscribe(
      (response) => {
        location.href = "https://mailthis.to/confirm";
        console.log(response);
      },
      (error) => {
        console.warn(error.responseText);
        console.log({ error });
      }
    );
  }
}
