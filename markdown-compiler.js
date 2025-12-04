#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Compilador simple de Markdown a HTML
 * Convierte archivos .md a .html
 */

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

function markdownToHtml(markdown) {
    let html = markdown;

    // Códigos de bloque (```...```)
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
        const language = lang || 'javascript';
        return `<pre><code class="language-${language}">${escapeHtml(code.trim())}</code></pre>`;
    });

    // Líneas horizontales
    html = html.replace(/^---$/gm, '<hr>');

    // Títulos (h1-h6)
    html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.*?)$/gm, '<h1>$1</h1>');

    // Negrita y cursiva
    html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/____(.*?)____/g, '<strong><em>$1</em></strong>');
    html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');
    html = html.replace(/_(.*?)_/g, '<em>$1</em>');

    // Enlaces [texto](url)
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

    // Listas desordenadas
    html = html.replace(/^\s*[-*]\s+(.*?)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*?<\/li>)/s, '<ul>$1</ul>');

    // Listas ordenadas
    html = html.replace(/^\s*\d+\.\s+(.*?)$/gm, '<li>$1</li>');

    // Párrafos (líneas en blanco)
    const lines = html.split('\n');
    let inBlock = false;
    let result = [];
    let paragraph = [];

    for (let line of lines) {
        if (line.trim() === '') {
            if (paragraph.length > 0 && !inBlock) {
                result.push('<p>' + paragraph.join(' ') + '</p>');
                paragraph = [];
            } else {
                result.push(line);
            }
        } else if (line.match(/^<(h[1-6]|pre|ul|ol|hr|blockquote)/)) {
            if (paragraph.length > 0) {
                result.push('<p>' + paragraph.join(' ') + '</p>');
                paragraph = [];
            }
            result.push(line);
            inBlock = true;
        } else if (line.match(/^<\/(h[1-6]|pre|ul|ol|blockquote)>/)) {
            result.push(line);
            inBlock = false;
        } else {
            paragraph.push(line);
        }
    }

    if (paragraph.length > 0) {
        result.push('<p>' + paragraph.join(' ') + '</p>');
    }

    return result.join('\n');
}

function generateHtmlFile(markdownPath, outputPath = null) {
    // Si no se especifica ruta de salida, genera una en el mismo directorio con .html
    if (!outputPath) {
        outputPath = markdownPath.replace(/\.md$/, '.html');
    }

    // Leer el archivo markdown
    const markdown = fs.readFileSync(markdownPath, 'utf-8');
    const html = markdownToHtml(markdown);

    // Extraer título del primer h1
    const titleMatch = html.match(/<h1>(.*?)<\/h1>/);
    const title = titleMatch ? titleMatch[1] : 'Documento';

    // Crear HTML completo
    const fullHtml = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
            padding: 20px;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            background-color: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        h1, h2, h3, h4, h5, h6 {
            margin-top: 1.5em;
            margin-bottom: 0.5em;
            color: #222;
            font-weight: 600;
        }

        h1 {
            font-size: 2.5em;
            border-bottom: 3px solid #667eea;
            padding-bottom: 0.3em;
        }

        h2 {
            font-size: 2em;
            color: #667eea;
        }

        h3 {
            font-size: 1.5em;
        }

        p {
            margin-bottom: 1em;
            text-align: justify;
        }

        a {
            color: #667eea;
            text-decoration: none;
            transition: color 0.3s;
        }

        a:hover {
            color: #764ba2;
            text-decoration: underline;
        }

        ul, ol {
            margin-left: 2em;
            margin-bottom: 1em;
        }

        li {
            margin-bottom: 0.5em;
        }

        pre {
            background-color: #f4f4f4;
            border-left: 4px solid #667eea;
            padding: 15px;
            overflow-x: auto;
            margin: 1em 0;
            border-radius: 4px;
        }

        code {
            font-family: 'Courier New', monospace;
            font-size: 0.9em;
            background-color: #f4f4f4;
            padding: 2px 6px;
            border-radius: 3px;
        }

        pre code {
            background-color: transparent;
            padding: 0;
        }

        hr {
            border: none;
            border-top: 2px solid #ddd;
            margin: 2em 0;
        }

        strong {
            font-weight: 700;
            color: #222;
        }

        em {
            font-style: italic;
        }

        blockquote {
            border-left: 4px solid #667eea;
            padding-left: 1em;
            margin-left: 0;
            color: #666;
            font-style: italic;
            margin: 1em 0;
        }

        table {
            border-collapse: collapse;
            width: 100%;
            margin: 1em 0;
        }

        table th, table td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }

        table th {
            background-color: #667eea;
            color: white;
        }

        table tr:nth-child(even) {
            background-color: #f9f9f9;
        }

        .toc {
            background-color: #f9f9f9;
            padding: 20px;
            margin: 20px 0;
            border-radius: 4px;
            border-left: 4px solid #667eea;
        }

        .toc h3 {
            margin-top: 0;
        }

        .toc ul {
            list-style: none;
            margin-left: 0;
        }

        .toc li {
            margin: 0.5em 0;
        }

        .toc a {
            color: #667eea;
        }

        @media (max-width: 768px) {
            .container {
                padding: 20px;
            }

            h1 {
                font-size: 2em;
            }

            h2 {
                font-size: 1.5em;
            }

            pre {
                overflow-x: auto;
                font-size: 0.85em;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        ${html}
    </div>
</body>
</html>`;

    // Escribir archivo HTML
    fs.writeFileSync(outputPath, fullHtml, 'utf-8');
    console.log(`✅ Compilado: ${markdownPath} → ${outputPath}`);
}

// Main
if (require.main === module) {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.log('Uso: node markdown-compiler.js <archivo.md> [salida.html]');
        console.log('\nEjemplos:');
        console.log('  node markdown-compiler.js CURSOS/HTML5/HTML5-CSS3.md');
        console.log('  node markdown-compiler.js CURSOS/HTML5/HTML5-CSS3.md output.html');
        process.exit(1);
    }

    const inputFile = args[0];
    const outputFile = args[1] || null;

    if (!fs.existsSync(inputFile)) {
        console.error(`❌ Error: No se encuentra el archivo ${inputFile}`);
        process.exit(1);
    }

    try {
        generateHtmlFile(inputFile, outputFile);
    } catch (error) {
        console.error(`❌ Error al compilar: ${error.message}`);
        process.exit(1);
    }
}

module.exports = { markdownToHtml, generateHtmlFile };
