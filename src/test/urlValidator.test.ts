import { isURL } from "../utils";
import { test } from "tap";

test("should be valid", (t) => {
  t.equal(isURL("https://www.google.com"), true);
  t.end();
});

test("should be invalid", (t) => {
  t.equal(isURL("www.google.com"), false);
  t.end();
});

test("should be invalid", (t) => {
  t.equal(isURL("google.com"), false);
  t.end();
});

test("should be valid", (t) => {
  t.equal(isURL("http://www.google.com"), true);
  t.end();
});

test("should be valid", (t) => {
  t.equal(isURL("ftp://www.google.com"), true);
  t.end();
});

test("should be invalid", (t) => {
  t.equal(isURL("https://"), false);
  t.end();
});

test("should be invalid", (t) => {
  t.equal(isURL(""), false);
  t.end();
});

test("should be invalid", (t) => {
  t.equal(isURL(".com"), false);
  t.end();
});
