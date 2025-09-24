{ pkgs, lib, config, inputs, ... }:

{
  env.GREET = "devenv";

  packages = [ 
    pkgs.git 
    pkgs.super-productivity
    pkgs.bashInteractive
  ];

  languages.javascript = {
    enable = true;
    npm.enable = true;
  };
}
