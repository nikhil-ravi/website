import Image from "next/image";
import Link from "next/link";
import React from "react";

export const customComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
};

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));

  let rows = data.rows.map((row, index) => {
    let cells = row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>);
    return <tr key={index}>{cells}</tr>;
  });

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props) {
  let href = props.href;
  if (href.startsWith("/")) {
    return (
      <Link {...props} href={href}>
        {props.children}
      </Link>
    );
  }
  if (href.startsWith("#")) {
    return <a {...props} />;
  }
  return <a {...props} target="_blank" rel="noopener noreferrer" />;
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Code(props) {
  return (
    <>
      {typeof props.children === "string" ? (
        <code className="rounded !bg-gray-500 p-0.5 text-white before:text-gray-500 after:text-gray-500">
          {props.children}
        </code>
      ) : (
        <code>{props.children}</code>
      )}
    </>
  );
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

function createHeading(level) {
  // eslint-disable-next-line react/display-name
  return ({ children }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children,
    );
  };
}
