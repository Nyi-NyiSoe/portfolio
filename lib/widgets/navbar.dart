import 'package:flutter/material.dart';

class NavBar extends StatelessWidget {
  final void Function()? onPressed;
  final String? buttonName;
  const NavBar({
    super.key,
    required this.onPressed,
    required this.buttonName
  });

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed:onPressed,
      child: Text(buttonName!),
    );
  }
}
