# Ciphering-CLI-tool
RS School NodeJS Course (Task 1)
https://github.com/rolling-scopes-school/basic-nodejs-course/blob/master/cross-check/ciphering-cli-tool.md


# Ciphering-CLI-tool 
Implementation of CLI tool that will encode and decode a text by 3 substitution ciphers:
* Caesar cipher
* Atbash cipher
* ROT-8 as variation of ROT-13

# How to install
1. Download it from this repository
2. Go to folder 'Ciphering-CLI-tool'
3. To install use 'npm install'
4. Enter the command, using instruction below

# Command instruction
1. Command should start with 'node my_ciphering_cli -c' or 'node my_ciphering_cli --config'
2. config for ciphers Config is a string with pattern {XY(-)}n, where:
    * X is a cipher mark:
        - C is for Caesar cipher (with shift 1)
        - A is for Atbash cipher
        - R is for ROT-8 cipher
    * Y is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
        - 1 is for encoding
        - 0 is for decoding

    For example, config "C1-C1-R0-A" means "encode by Caesar cipher => encode by Caesar cipher => decode by ROT-8 => use Atbash"
3. -i, --input: a path to input file (This file must be created).
    If this argument is absent, you can write your text in the command line.
4. -o, --output: a path to output file (The direction for this file must exist).
    If this argument is absent, you can see your cipher text in the command line.

# Example
1. $ node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"

If you create the input file "./input.txt" and write this text there: "This is secret. Message about "_" symbol!",
the output file "./output.txt" will be created and there will be this text: "Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!".

2. $ node my_ciphering_cli -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"
input.txt "This is secret. Message about "_" symbol!"
output.txt "Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!"






