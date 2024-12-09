window.onload = function () {
  // Attach form submit event listener after the DOM is loaded
  document.getElementById("domainForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get user inputs and split into arrays
    const pronouns = document.getElementById("pronoun").value.split(",").map((word) => word.trim());
    const adjectives = document.getElementById("adj").value.split(",").map((word) => word.trim());
    const nouns = document.getElementById("noun").value.split(",").map((word) => word.trim());
    const extensions = document.getElementById("extensions").value.split(",").map((ext) => ext.trim());

    // Clear previous results
    const domainList = document.getElementById("domainList");
    domainList.innerHTML = "";

    // Write the code here
    // Create a new array named 'domains' and push all the domain permutations in it

    const pronoun = ['the', 'our'];
    const adjective = ['fast', 'slow'];
    const noun = ['cat', 'dog'];
    const extension = ['.com', '.net', '.io'];

    const domains = [];

    //! forEach

    pronoun.forEach((pro) => {
      adjective.forEach((adj) => {
        noun.forEach((nou) => {
          extension.forEach((ext) => {
            domains.push(`${pro}${adj}${nou}${ext}`)
          });
        });
      });
    });

    //! for of

    // for (const pro of pronoun) {
    //   for (const adj of adjective) {
    //     for (const nou of noun) {
    //       for (const ext of extension) {
    //         domains.push(`${pro}${adj}${nou}${ext}`)
    //       }
    //     }
    //   }
    // }


    // Display the results
    domains.forEach((domain) => {
      const li = document.createElement("li");
      li.textContent = domain;
      domainList.appendChild(li);
    });
  });
};
