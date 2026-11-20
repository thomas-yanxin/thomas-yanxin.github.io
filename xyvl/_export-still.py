"""Build the standalone homepage image with Plotter and embed its local logos."""

import argparse
import base64
import mimetypes
import runpy
import xml.etree.ElementTree as ET
from pathlib import Path


SVG = "{http://www.w3.org/2000/svg}"
ID_PREFIX = "xyvl-still"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("plotter_exporter", type=Path, help="Path to Plotter's export-svg.py")
    args = parser.parse_args()

    directory = Path(__file__).resolve().parent
    export_svg = runpy.run_path(str(args.plotter_exporter))["export_svg"]
    ET.register_namespace("", SVG[1:-1])
    drawing = ET.parse(directory / "drawing.svg").getroot()
    logos = {}
    for image in drawing.iter(f"{SVG}image"):
        attributes = image.attrib.copy()
        identifier = attributes.pop("id")
        asset = directory / attributes["href"]
        mime_type = mimetypes.guess_type(asset.name)[0]
        encoded = base64.b64encode(asset.read_bytes()).decode("ascii")
        attributes["href"] = f"data:{mime_type};base64,{encoded}"
        logos[f"{ID_PREFIX}-{identifier}"] = attributes
        image.tag = f"{SVG}g"
        image.attrib.clear()
        image.set("id", identifier)

    still = ET.fromstring(export_svg(
        ET.tostring(drawing, encoding="unicode"),
        id_prefix=ID_PREFIX,
        ink="#171717",
        embed_font=True,
    ))
    for node in still.iter(f"{SVG}g"):
        if node.get("id") in logos:
            node.tag = f"{SVG}image"
            node.attrib.update(logos[node.get("id")])

    output = directory / "codesign.svg"
    output.write_text(ET.tostring(still, encoding="unicode") + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
