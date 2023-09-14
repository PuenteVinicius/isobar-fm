import { fireEvent, render, screen } from "@testing-library/react";
import SearchMenu from "./SearchMenu";
import { BrowserRouter } from "react-router-dom";
import Band from "../../lib/band/model";

const conditionHandler = (bands: Band[]) => {
  console.log(bands);
};

const mockedBands = [
  {
    name: "Nickelback",
    image:
      "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
    genre: "rock",
    biography:
      'Nickelback is a rock band which formed in Hanna, Alberta, Canada in 1995. Nickelback is one of the most commercially successful Canadian groups, having sold 30 million records worldwide. Nickelback ranks as the 11th best selling music act of the 2000s, and places as the 2nd best selling foreign act in the US behind The Beatles for the 2000s.\n\nThe band consists of Chad Kroeger (vocals, guitar), Ryan Peake (guitar, vocals), Mike Kroeger (bass) and Daniel Adair (drums). <a href="https://www.last.fm/music/Nickelback">Read more on Last.fm</a>',
    numPlays: 17605491,
    id: "bc710bcf-8815-42cf-bad2-3f1d12246aeb",
    albums: [
      "3c5794a0-d913-390d-ab24-6762af38c112",
      "9599042a-34a9-39f2-a52d-c903a382515c",
      "b3fad414-9b92-4d04-b703-9605d5d33bac",
    ],
  },
  {
    name: "Goo Goo Dolls",
    image:
      "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
    genre: "rock",
    biography:
      'Goo Goo Dolls is an alternative rock band formed in 1985 in Buffalo, New York, USA by guitarist/vocalist John Rzeznik and bassist/vocalist Robby Takac initially under the name the Sex Maggots (the new name was chosen from an ad in True Detective magazine at the behest of a local club owner). They are most famous for the hit "Iris", featured on the soundtrack to the 1998 film City of Angels. Currently, the band consists of John Rzeznik (guitar, vocals) and Robby Takac (vocals, bass). <a href="https://www.last.fm/music/Goo+Goo+Dolls">Read more on Last.fm</a>',
    numPlays: 3057200,
    id: "e2c00c56-8365-4160-9f40-a64682917633",
    albums: ["31e609d2-49aa-4b71-ad6e-57c0b0f54161"],
  },
];

describe("On Render SearchMenu Component", () => {
  render(
    <BrowserRouter>
      {
        <SearchMenu
          shouldShowMenu={true}
          filteredBands={mockedBands}
          onConditionChange={(bands: Band[]) => conditionHandler(bands)}
        />
      }
    </BrowserRouter>
  );
  test("Should render the Ordem alfabetica when filter is oppened", async () => {
    const button = screen.getByRole("button");
    fireEvent.click(button);

    const alphabeticOrderOption = screen.getByText(/Ordem alfabetica/i);
    const numPlays = screen.getByText(/Popularidade/i);

    expect(alphabeticOrderOption).toBeInTheDocument();
    expect(numPlays).toBeInTheDocument();
  });
});
