#! /bin/bash

if [[ $1 = '--dev' ]]; then
  build="dev-$(git rev-parse --short=16 HEAD)";
else
  tag=$(git tag);
  build="$tag-$(git rev-parse --short=16 $tag)"
fi

echo $build;
