export class HumanFriendlyErr extends Error {
    constructor(message) {
      super(message);
    }
    write() {
      process.stderr.write(this.message);
      // process.exit();
    }
}