import React from "react";
import MediaObjectLayout from ".";

export default {
    title: 'atoms/mediaobjectlayout',
    component: MediaObjectLayout
}

export const media = () => {
    return(<MediaObjectLayout>
        <div>
            <img width={192} height={108} alt="sample"></img>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, accusamus. Et ullam accusamus molestiae suscipit quisquam quaerat autem reprehenderit quod tenetur, sequi qui nihil eos vero modi dolore expedita deserunt beatae, doloribus accusantium est ea! Consectetur adipisci reiciendis eius quod cum vel iure! Ad amet a consequatur nisi nobis voluptatibus adipisci, enim quae quibusdam tempore modi alias tenetur, consequuntur autem dicta quod quis optio vero cumque numquam ab. Doloremque, reiciendis dolor tempore fugiat ad laboriosam eligendi in quibusdam vitae quasi facere ab magnam saepe esse mollitia inventore aliquam. Possimus aperiam, eligendi cupiditate suscipit sed explicabo quisquam ad? Asperiores, dolorum fugiat?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas ex. Alias ducimus hic asperiores, libero mollitia enim! Suscipit accusamus facere blanditiis quia ipsum qui voluptatum totam est repellat amet, adipisci expedita! Ipsum odio soluta ratione fuga consectetur repellat alias earum tenetur, ex ut, doloremque eligendi vitae doloribus voluptates impedit?</p>
    </MediaObjectLayout>);
}

export const mediawithsec = () => {
   return( <MediaObjectLayout tag='section'>
        <div>
            <img width={192} height={108} alt="sample"></img>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, accusamus. Et ullam accusamus molestiae suscipit quisquam quaerat autem reprehenderit quod tenetur, sequi qui nihil eos vero modi dolore expedita deserunt beatae, doloribus accusantium est ea! Consectetur adipisci reiciendis eius quod cum vel iure! Ad amet a consequatur nisi nobis voluptatibus adipisci, enim quae quibusdam tempore modi alias tenetur, consequuntur autem dicta quod quis optio vero cumque numquam ab. Doloremque, reiciendis dolor tempore fugiat ad laboriosam eligendi in quibusdam vitae quasi facere ab magnam saepe esse mollitia inventore aliquam. Possimus aperiam, eligendi cupiditate suscipit sed explicabo quisquam ad? Asperiores, dolorum fugiat?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas ex. Alias ducimus hic asperiores, libero mollitia enim! Suscipit accusamus facere blanditiis quia ipsum qui voluptatum totam est repellat amet, adipisci expedita! Ipsum odio soluta ratione fuga consectetur repellat alias earum tenetur, ex ut, doloremque eligendi vitae doloribus voluptates impedit?</p>
    </MediaObjectLayout>)
}