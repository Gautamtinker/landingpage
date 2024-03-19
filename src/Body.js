import React from "react";

function Body() {
  const buttonStyle = {
    backgroundColor: "#3A7DFF",
    padding: "13px",
    fontSize: "15px",
    borderRadius: "999px",
    margin: "12px",
    cursor: "pointer",
    color: "White",
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      <div>
        <h1 style={{ color: "#071A45", fontFamily: "Lato" }}>
          CONNECTING DREAMS TO REALITY
        </h1>
      </div>
      <div>
        <h1 style={{ color: "#2C8FB5", fontFamily: "Lato" }}>YOUR PREMIER</h1>
      </div>
      <div>
        <h1 style={{ color: "#071A45", fontFamily: "Lato" }}>
          REAL ESTATE MARKETPLACE
        </h1>
      </div>
      <div>
        <button style={buttonStyle}>Find Your Home →</button>
        <button style={buttonStyle}>List Your Property →</button>
      </div>
      <div>
        <img
          alt="logo"
          src="https://s3-alpha-sig.figma.com/img/8cd7/6808/70602477b44fd4ed03b29900e051ef7f?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EyNN7VH2IbMFxGOtbUbipUSNHpyaVxrCLVkGzS9gyXIhpjYTELbLKJOcxR7t0drfEdfMLDWCvXJiXfdAKXBbhHBVJhlKz5-nTtlmWGSyZXOp1zU5EXGgN-yNdsp6uUrX~gHHwVMB5PZe7jKHqcOiEKbSA0vt2eZffHZ1Ia6x-RstwOqdyugxRGfV3~bHk~avGZKh3lBmepmsUCw3KTvEvhmZ8BUkzXe0SzKoQgPQghLIJCxONw-qgKr5tbVFTQEEtk8RbVMQsMtOQigjHUfC2WR0JFwCoi3xp5tUGOhiGAfwot4HXEb6J3yYC0RqFDyLZ62TPXOJP93MBGtINGwXtg__"
          width="1440px"
          height="815px"
        />
      </div>
      <div>
        <h1 style={{ color: "#071A45" }}>HOW IT WORKS?</h1>
      </div>
      <div style={{ display: "flex", alignItems: "center", width: "900px" }}>
        <img
          alt="logo"
          src="https://s3-alpha-sig.figma.com/img/2ff4/2e4b/accd20a2936198d0e1d22cea7aced643?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dwaw31NcoeJA8rBf9CKaMFx32PupTFpqp7eSVic3Ayp4N~rzP19cqEZDhG5as8vp3bF18kzINPyi-wPp~i7e4tWG0jI8v2uLi20wvpUYUaH3BOTxYF0kByDmrsVIhuvG~t-hWzftH23U2ZWzJK9mHqfRbWLol4Yfl7tWLH~pq9jfK5JvjiZoBJyCebJOWGt~V1HlzMgVmySQ5CngNJqRhpoSJSe7By9o-wgXnZlni8Qt5aVpvLOR~HcbO9wvP-dZFmwWHF93bY-68LlhM00LtqIkLcCWkelDKLTRiWeIy-JdRlvuhaP3fytK3Kk3sfX7VuqdSdGCEGRGTU7ZQJRfcA__"
          width="320px"
          height="320px"
          style={{ borderRadius: "30px", margin: "75px" }}
        />
        <div>
          <h1 style={{ color: "#071A45" }}>Discover Your Perfect Home</h1>
          <div>
            <p style={{ textAlign: "left" }}>
              Use our advanced filters to narrow down your search. Specify
              everything from location to amenities, ensuring you find the
              property that feels right.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <div style={{ marginLeft: "670px" }}>
          <h1 style={{ color: "#071A45" }}>Showcase Your Property</h1>
          <p style={{ textAlign: "right" }}>
            List your property with ease. Fill in detailed forms to highlight
            every feature, attracting the perfect buyer directly
          </p>
        </div>
        <img
          alt="logo"
          src="https://s3-alpha-sig.figma.com/img/6e87/7ac6/b018cc59dfb49f0e8498c00ea4a6c291?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f40hLVIc8kwnasizOvFedpCFc9c5e8zp0s1sVq0faoU9wRr22CGGlWmbGVeXG-NJ2Q7RvQYetPUcd3r9V42QrXca9sjtBJ87jAgDEIQbO1rW0Pjeus9k86LNVjximbGsLj7otQu2izz6dsuKLREzeJyVbwfBqtCtkt03uhFbJnvZ7tbvEQuTEjtj15dVUF4IPbvAfyigEcq9fb4PzPAiWLCkBdso4NrldX607rEaiAzht1Fh4V5SC2sMkb28yLgpSWGL6qKHUHpHU-iOHBSb5Qs8xK2jMYLIOAUeLGKJX9-lz7Gf2SOxg0~McTY3snRR7K~yjY2259EZ0SZvjs5enA__"
          width="320px"
          height="320px"
          style={{ borderRadius: "30px", margin: "75px" }} // Adjust margin as needed
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", width: "900px" }}>
        <img
          alt="logo"
          src="https://s3-alpha-sig.figma.com/img/5ccf/43b4/34c7199c4491ded305b3fc8cf2e395a5?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P6QubouylDzjsko7m8lsS0NX9Ak-GDicPYhP9c9qe2jJedcg3FNAfmbOGGdbo~g1ECCh2DrP6Ym9Zkb1rEzRybKSVcBoz4MKbUkEi9VYo47pEk6cubIfndE~~ujtBSvynlA4IYXXcTtsiJ0M~i5Gt0lkZlqiToN-7Q0Rz8y2z97LUqW14O863JcsJ6W0GXP9kVlSbzWTVQvfibBBs9E8bnT5GBuBiQb6LZyvJOwyKf7dndOdBsFNRpy9yAMEpraIibPX-UFIX8DrKau9T4jqIZuPvCej7Swb~e4Pmu7c0LRaH~K6u-D8h3d99~hVOXp6Rrx5g7UGX8yzRQSROzGUvw__"
          width="320px"
          height="320px"
          style={{ borderRadius: "30px", margin: "75px" }}
        />
        <div>
          <h1 style={{ color: "#071A45" }}>Connect and Communicate</h1>
          <div>
            <p style={{ textAlign: "left" }}>
              Our platform facilitates direct communication between buyer and
              seller, making negotiations transparent and straightforward
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <div style={{ marginLeft: "670px" }}>
          <h1 style={{ color: "#071A45" }}>Seal the Deal Securely</h1>
          <p style={{ textAlign: "right" }}>
            Advance payments made safe. Secure your agreement with confidence,
            and step closer to your dream property.
          </p>
        </div>
        <img
          alt="logo"
          src="https://s3-alpha-sig.figma.com/img/a70d/0034/dedc02fb13a4d614206fc808f9c6351d?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hZsQAeWgUT-0gfZtzR96wt~P5nlbjj27HwPoz6OE7gieyPORpBzaOjm9LBBK9xNKECUgd06XFVdLpkPSoAmGSMuUNYbae3mD3hyz20PEexQF-2H-KoK0sw-CuvePBpe2rWEFo0lA9PuDYgC46PA-Rjxb0RZeFJ53rREkr6riba2vydFUhcJeayGCQAEKSG9VQGjYydUVK9PgPcOVRcuf8qgqCs22e9lMxSJHowkYSl0YV5GFcZg1Udzqr9bLs4-w160PwIHH92mSiSUtpJx6yNvI4JEFPD3LWjiM-Qhl~Zc1CCmZHI3esQoXGIBJhRtbxWM7sqFjBZ1LZ3KvOLZUcA__"
          width="320px"
          height="320px"
          style={{ borderRadius: "30px", margin: "75px" }} // Adjust margin as needed
        />
      </div>
      <div
        style={{
          backgroundColor: "#D6E9F0",
          width: "100%",
          height: "700px",
          alignItems: "center",
          paddingTop: "50px", // Add padding to create space from the top
          boxSizing: "border-box",
          fontFamily: "Lato",
          marginBottom: "70px", // Include padding in the height calculation
        }}
      >
        <h1
          style={{
            color: "#071A45",
            fontFamily: "Lato",
            fontSize: "50px",
          }}
        >
          WHY CHOOSE XYZ?
        </h1>
        <div
          style={{
            width: "100%",
            height: "700px",
            alignContent: "center",
            margin: "30px",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "250px",
              position: "relative",
              padding: "25px",
              textAlign: "left",
              marginRight: "140px",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "-2px",
                top: "0",
                bottom: "0",
                width: "1px",
                background:
                  "linear-gradient(to bottom, #E2E2E2, #000, #E2E2E2)",
              }}
            ></div>
            <div
              style={{
                borderTop: "1px solid #E2E2E2",
                borderBottom: "1px solid #E2E2E2",
                paddingLeft: "10px",
                paddingBottom: "40px",
              }}
            >
              <h1 style={{ fontSize: "50px", margin: "0" }}>01</h1>
              <h3 style={{ margin: "0" }}>Search and Filter</h3>
            </div>
            <p>
              Tailored Searches to meet your needs. Find what you’re looking for
              with precision.
            </p>
          </div>
          <div
            style={{
              width: "200px",
              height: "250px",
              position: "relative",
              padding: "25px",
              textAlign: "left",
              marginRight: "140px",
              marginTop: "70px",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "-2px",
                top: "0",
                bottom: "0",
                width: "1px",
                background:
                  "linear-gradient(to bottom, #E2E2E2, #000, #E2E2E2)",
              }}
            ></div>
            <div
              style={{
                borderTop: "1px solid #E2E2E2",
                borderBottom: "1px solid #E2E2E2",
                paddingLeft: "10px",
                paddingBottom: "40px",
              }}
            >
              <h1 style={{ fontSize: "50px", margin: "0" }}>02</h1>
              <h3 style={{ margin: "0" }}>Detailed Listing</h3>
            </div>
            <p>
              Every Detail Matters. Sellers can list, and buyers can explore
              properties that meet their exact specifications.
            </p>
          </div>
          <div
            style={{
              width: "200px",
              height: "250px",
              position: "relative",
              padding: "25px",
              textAlign: "left",
              marginRight: "140px",
              marginTop: "150px",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "-2px",
                top: "0",
                bottom: "0",
                width: "1px",
                background:
                  "linear-gradient(to bottom, #E2E2E2, #000, #E2E2E2)",
              }}
            ></div>
            <div
              style={{
                borderTop: "1px solid #E2E2E2",
                borderBottom: "1px solid #E2E2E2",
                paddingLeft: "10px",
                paddingBottom: "40px",
              }}
            >
              <h1 style={{ fontSize: "50px", margin: "0" }}>03</h1>
              <h3 style={{ margin: "0" }}>Direct Messaging</h3>
            </div>
            <p>
              Seamless Communication. Connect directly with sellers or buyers to
              ask questions, negotiate, and make decisions.
            </p>
          </div>
          <div
            style={{
              width: "200px",
              height: "250px",
              position: "relative",
              padding: "25px",
              textAlign: "left",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "-2px",
                top: "0",
                bottom: "0",
                width: "1px",
                background:
                  "linear-gradient(to bottom, #E2E2E2, #000, #E2E2E2)",
              }}
            ></div>
            <div
              style={{
                borderTop: "1px solid #E2E2E2",
                borderBottom: "1px solid #E2E2E2",
                paddingLeft: "10px",
                paddingBottom: "40px",
              }}
            >
              <h1 style={{ fontSize: "50px", margin: "0" }}>04</h1>
              <h3 style={{ margin: "0" }}>Secure Payments</h3>
            </div>
            <p>
              Trust in Every Transaction. Our secure payment system ensures your
              peace fo mind.
            </p>
          </div>
        </div>
      </div>
      <div style={{ position: "relative", marginBottom: "70px" }}>
        <img
          alt="logo"
          src="https://s3-alpha-sig.figma.com/img/394a/994f/f78c08a03ca12d0bc86bdbabbe1754ee?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Idhwccme-yzilCWnSxY3soFRdzRiYeWpvr6MDIBL9w7FhuFolTbn2-JEER6hsARwNHE5ZNhchK9yPpSLpMGpTPMQJcI7PTmK7911kcYUab5aremGMwiRaucS3w0I-kgjKgxvYGAv4qFM10SuiKvDosLW~NNHYLs8NPIk91dOLYCiJxSszHlnrXY0ptoOczOt--2scbekboW9NWwTC9G3DQQ4mdG8jGyA7ppQchc-s0nVps1uDgJ8UX6S7kTgdsAJyl-IoxWYLZY4WOMeh8CFKr9Pp75HCYDvvzObI7-TBubK5v30stKnB-OuYZ1XaAodIKF5DnO2M6CAIjBXt5I2og__"
          style={{ width: "100%", height: "900px" }}
        />
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "5%",
            // maxWidth: "45%",
          }}
        >
          <h1
            style={{
              color: "#071A45",
              fontSize: "50px",
            }}
          >
            YOUR TRUSTED PARTNER IN THE FUTURE OF HOUSING
          </h1>
          <p>
            Our partnerships with governments and local banks ensure that our
            housing prices are affordable enough for our target market.
          </p>
          <button style={buttonStyle}>Join Our Community Today →</button>
        </div>
      </div>
    </div>
  );
}

export default Body;
