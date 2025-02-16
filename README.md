# Expo ImagePicker Inconsistent Image Order

This repository demonstrates a bug in Expo's ImagePicker library where the order of images selected by the user does not always match the order returned in the `response.assets` array when selecting multiple images.  This can lead to unexpected application behavior if your application relies on the selection order.

## Bug Report

The issue occurs consistently when selecting more than one image.  The returned images are shuffled and not always in the order selected.

## Reproduction Steps

1. Clone this repository.
2. Run the app using Expo Go.
3. Select multiple images.
4. Observe that the console logs the images in a different order than they were selected.

## Proposed Solution (bugSolution.js)

While we can't directly control the ImagePicker's internal ordering, a workaround to maintain selection order is to use a temporary array to store the URIs in the order of selection and then correlate those URIs to the assets from the ImagePicker response.