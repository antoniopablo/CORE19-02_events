const fs = require('fs-extra');
const archiver = require('archiver');
const orig = __dirname + "/tests/CORE19-02_events.zip";
const dest = __dirname + "/CORE19-02_events.zip";
const output = fs.createWriteStream(orig);
const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
});
archive.pipe(output);
archive.glob('*', {"ignore": ['node_modules', 'tests', 'README.md']});
archive.finalize();
fs.moveSync(orig, dest, { overwrite: true });
