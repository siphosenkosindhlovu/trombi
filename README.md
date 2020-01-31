### The Data
It is stored as a Javascript Object in `./assets/data.js`
It has the following schema

    [
	    {
          index: number,
          picture: string - url link to picture,
          name: string - first and last name separated by a space,
          company: string,
          status: string - can either be Consulting, Live, Data,
          email: string,
          telephone: string,
          bio: string,
          hobbies: string[] - an array of strings since it renders list items
          tags: string[] - an array of tags,
          missions: object[
            {
              title: string,
              date: body,
              body: string[] - also renders a list so it should be an array
            }
          ]
      }
    ]
