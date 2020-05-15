# Efforts Made

1. Explored how to use datepicker components of Ant design and moment js for date logic.
2. Used Less to be able to decouple styling. Later on, I decided to incorporate styling wiithin components so I wouldnt't have to worry about css speicificity.
3. I initially explored using react-table but setting it up for Typescript requires too much work.
4. I decided to use redux for state management. I have written a couple of projects using redux which made it easier for me.
5. Using Ant Design's Table component is much easier to use with Typescript support out of the box. Implementing search logic can be done easily using the 'sorter' property. Documentation is much better than react-table as well.
6. For the mobile UI, I had to create sort actions and reducers.
7. I used react-responsive for handling meda queries to detect whether to use the desktop or mobile layout.
8. Initially, I thought of opening a modal when reading an email but it was difficult to position the modal correctly and keeping it responsive so I opted to linking to a new page instead.
9. Page linking is done using react-router-dom
