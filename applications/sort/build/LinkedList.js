"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var LinkedList = /** @class */ (function () {
    /**
     *
     */
    function LinkedList(data) {
        this.data = data;
        this.head = null;
    }
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        throw new Error('Method not implemented.');
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        throw new Error('Method not implemented.');
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
